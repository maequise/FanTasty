namespace FanTastyBack.Config
{
    public class FantastyDatabaseSettings : IFantastyDatabaseSettings
    {
        public string RecettesCollectionName { get; set; }
        public string IngredientsCollectionName { get; set; }
        public string UtilisateursCollectionName { get; set; }  
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IFantastyDatabaseSettings
    {
        string RecettesCollectionName { get; set; }
        string IngredientsCollectionName { get; set; }
        string UtilisateursCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
