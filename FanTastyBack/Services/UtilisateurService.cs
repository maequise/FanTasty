using FanTastyBack.Models;
using FanTastyBack.Repositories.Interfaces;
using FanTastyBack.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.IO;
using System.Text;

namespace FanTastyBack.Services
{
    public class UtilisateurService : IUtilisateurService
    {
        private readonly IUtilisateurRepository _repository;

        private readonly byte[] salt = new byte[512 / 8];

        public UtilisateurService(IUtilisateurRepository repository)
        {
            this._repository = repository;
        }

        public Utilisateur Login(string email, string password)
        {
            Utilisateur user = this._repository.Login(email, HashPassword(password));

            var decrypted = AesDecryptString(user.MotDePasse, password, "monsaltPerso");

            if (decrypted != null && decrypted.Equals(password))
            {
                return user;
            }

            return null;
        }

        public List<Utilisateur> FindAll()
        {
            List<Utilisateur> Utilisateurs = this._repository.FindAll();
            return Utilisateurs;
        }

        public Utilisateur FindById(string id)
        {
            Utilisateur utilisateur = this._repository.FindById(id);
            return utilisateur;
        }

        public void Create(Utilisateur utilisateur)
        {
            var sinClearText = AESEncryptString("", utilisateur.MotDePasse, "monsaltPerso");
            var withClearText = AESEncryptString(utilisateur.MotDePasse, utilisateur.MotDePasse, "monsaltPerso");


            //update the password with hashed
            utilisateur.MotDePasse = withClearText;
            utilisateur.Roles = new List<string>
            {
                "user"
            };


            this._repository.Create(utilisateur);
        }

        public void Delete(string id)
        {
            this._repository.Delete(id);
        }

        public Utilisateur Update(string id, Utilisateur utilisateur)
        {
            this._repository.Update(id, utilisateur);
            return utilisateur;
        }

        public void AjoutRecetteFavoris(string idUtilisateur, string idRecette)
        {
            this._repository.AjoutRecetteFavoris(idUtilisateur, idRecette);
        }

        public List<string> FindAllRecetteFavoris(string idUtilisateur)
        {
            List<string> recettesFavoris = this._repository.FindAllRecetteFavoris(idUtilisateur);
            return recettesFavoris;
        }

        public void DeleteRecetteFavoris(string idUtilisateur, string idRecette)
        {
            this._repository.DeleteRecetteFavoris(idUtilisateur, idRecette);
        }

        private string HashPassword(string password)
        {
            if(password == null)
            {
                throw new SystemException("cannot be null !");
            }

            using (var provider = new RNGCryptoServiceProvider())
            {
                provider.GetNonZeroBytes(salt);
            }

            return Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA512,
                iterationCount: 100000,
                numBytesRequested: 512 / 8));
        }

        private string ConvertHashedPassword(string base64Password)
        {
            byte[] bytesPassword = Convert.FromBase64String(base64Password);

            //new RijndaelManaged().CreateDecryptor().;

            return null;
        }

        private byte[] AESEncryptBytes(byte[] clearBytes, byte[] passBytes, byte[] saltBytes)
        {
            byte[] encryptedBytes = null;

            // create a key from the password and salt, use 32K iterations – see note
            var key = new Rfc2898DeriveBytes(passBytes, saltBytes, 1000000);

            // create an AES object
            using (Aes aes = new AesManaged())
            {
                // set the key size to 256
                aes.KeySize = 256;
                
                aes.Key = key.GetBytes(aes.KeySize / 8);
                aes.IV = key.GetBytes(aes.BlockSize / 8);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, aes.CreateEncryptor(),
          CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }
                    encryptedBytes = ms.ToArray();
                }
            }
            return encryptedBytes;
        }

        private byte[] AESDecryptBytes(byte[] cryptBytes, byte[] passBytes, byte[] saltBytes)
        {
            byte[] clearBytes = null;

            // create a key from the password and salt, use 32K iterations
            var key = new Rfc2898DeriveBytes(passBytes, saltBytes, 1000000);

            try
            {
                using (Aes aes = new AesManaged())
                {
                    // set the key size to 256
                    aes.KeySize = 256;

                    aes.Key = key.GetBytes(aes.KeySize / 8);
                    aes.IV = key.GetBytes(aes.BlockSize / 8);

                    using (MemoryStream ms = new MemoryStream())
                    {
                        using (CryptoStream cs = new CryptoStream(ms, aes.CreateDecryptor(), CryptoStreamMode.Write))
                        {
                            cs.Write(cryptBytes, 0, cryptBytes.Length);
                            cs.Close();
                        }
                        clearBytes = ms.ToArray();
                    }
                }
            }catch (CryptographicException e)
            {
                //noting todo
                return clearBytes;
            }
            
            return clearBytes;
        }

        private string AESEncryptString(string clearText, string passText, string saltText)
        {
            byte[] clearBytes = Encoding.UTF8.GetBytes(clearText);
            byte[] passBytes = Encoding.UTF8.GetBytes(passText);
            byte[] saltBytes = Encoding.UTF8.GetBytes(saltText);

            return Convert.ToBase64String(AESEncryptBytes(clearBytes, passBytes, saltBytes));
        }

        private string AesDecryptString(string cryptText, string passText, string saltText)
        {
            byte[] cryptBytes = Convert.FromBase64String(cryptText);
            byte[] passBytes = Encoding.UTF8.GetBytes(passText);
            byte[] saltBytes = Encoding.UTF8.GetBytes(saltText);

            byte[] decryptedBytes = AESDecryptBytes(cryptBytes, passBytes, saltBytes);


            return decryptedBytes != null ? Encoding.UTF8.GetString(decryptedBytes) : null;
        }

    }
}
