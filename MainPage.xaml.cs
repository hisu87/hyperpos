using HyperPOS.Models;

namespace HyperPOS
{
    public partial class MainPage : ContentPage
    {
        private readonly Context _dbContext;

        public MainPage(Context dbContext)
        {
            InitializeComponent();
            _dbContext = dbContext;
            TestDbConnection();
        }

        private async void TestDbConnection()
        {
            bool canConnect = await _dbContext.CanConnectAsync();
            await DisplayAlert("DB Connection", canConnect ? "Success!" : "Failed!", "OK");
        }
    }


}
