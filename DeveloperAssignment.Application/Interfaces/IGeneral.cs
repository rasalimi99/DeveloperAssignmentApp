
namespace DeveloperAssignment.Application
{

    public interface IGeneral
    {

        // general properties 
        public string DataExistsMessage { get; }
        public string NoChangesOnUpdating { get; }
        public string DataInserted { get; }
        public string DataUpdated { get; }
        public string DataDelteted { get; }

        // return type 
        public string Warning { get; }
        public string Error { get; }
        public string Success { get; }


    }
}
