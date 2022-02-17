using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FanTastyBack.Models
{
    public class Login
    {
        public string Username { get; set; }
        public string Password { get; set; }

        public Login(string username, string password)
        {
            this.Username = username;
            this.Password = password;
        }
    }
}
