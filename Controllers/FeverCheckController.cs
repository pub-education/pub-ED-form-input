using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forms_and_Inputs.Models;

namespace Forms_and_Inputs.Controllers
{
    public class FeverCheckController : Controller
    {
        public IActionResult Evaluate(double temp, string scale)
        {
            ViewBag.temperature = temp.ToString();
            ViewBag.scale = scale;
            ViewBag.result = FeverModel.FeverCheck(temp, scale);

            return View();
        }
    }
}
