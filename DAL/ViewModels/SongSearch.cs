﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.ViewModels
{
    public class SongSearch
    {
        public int SongId { get; set; }
        public int GroupId { get; set; }
        public int CountryId { get; set; }
        public String SongName { get; set; }
        public String SingerName { get; set; }
        public String AlbumName { get; set; }
    }
}
