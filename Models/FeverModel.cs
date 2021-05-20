using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forms_and_Inputs.Models
{
    public static class FeverModel
    {
        public static string FeverCheck(double temp, string scale)
        {
            if (temp > 37.5) return "You have fever.";
            else if (temp < 36) return "You have hypothermia.";
            else return "Your temperature is normal";
        }
    }
}
