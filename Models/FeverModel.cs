using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forms_and_Inputs.Models
{
    public class FeverModel
    {
        public static string FeverCheck(double temp, string scale)
        {
            string ret = "";
            if (scale == "celsius")
            {
                if (temp > 38) ret = "You have fever.";
                else if (temp < 35) ret = "You have hypothermia.";
                else ret = "Your temperature is normal";
            }
            if (scale == "fahrenheit")
            {
                if (temp > 100.4) ret = "You have fever.";
                else if (temp < 95) ret = "You have hypothermia.";
                else ret = "Your temperature is normal";
            }

            return ret;
        }
    }
}
