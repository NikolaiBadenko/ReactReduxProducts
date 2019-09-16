using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.IO;

namespace ReactReduxProducts.Controllers
{
    [Route("api/[controller]")]
    public class QuizApiController
    {
        #region Controller actions

        [HttpGet("[action]")]
        public object GetQuizData()
        {
            string appDataFolder = AppDomain.CurrentDomain.GetData("DataDirectory").ToString();
            string filePath = Path.Combine(appDataFolder, "QuizQuestions.json");
            var allText = File.ReadAllText(filePath);
            var jsonObject = JsonConvert.DeserializeObject(allText);

            return jsonObject;
        }

        #endregion
    }
}
