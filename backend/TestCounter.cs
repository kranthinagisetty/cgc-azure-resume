using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Xunit;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Text;

namespace Company.Function
{
    public class TestCounter
    {
        private readonly ILogger logger = TestFactory.CreateLogger();

        [Fact]
        public async void Http_trigger_should_return_known_string()
        {
            // Don't forget to implement monitoring
            var counter = new Counter();
            counter.Id = "index";
            counter.Count = 2;
            var request = TestFactory.CreateHttpRequest();
            var response = (HttpResponseMessage) GetResumeCounter.Run(request, counter, out counter, logger);
            Assert.Equal(3, counter.Count);
        }

    }
}