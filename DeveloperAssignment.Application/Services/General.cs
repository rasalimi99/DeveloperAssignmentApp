namespace DeveloperAssignment.Application
{
    public class General : IGeneral
    {
        // general properties 
        public string DataExistsMessage => "already exists";
        public string NoChangesOnUpdating => "No changes have been made to the data";
        public string DataInserted => "Data has been inserted successfully";
        public string DataUpdated => "Data has been updated successfully";
        public string DataDelteted => "Data has been deleted successfully";

        // return type 
        public string Warning => "Warning";
        public string Error => "Error";
        public string Success => "Success";

    }
}


