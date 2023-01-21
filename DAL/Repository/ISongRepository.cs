﻿using DAL.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repository
{
    public interface ISongRepository:IDisposable
    {
        bool Add(Song song);
        bool Update(Song song);
        bool Delete(Song song);
        bool Delete(int id);
        void Save();
        IEnumerable<Song> GetAll();
        IEnumerable<ViewModelSongs> GetAllSongForIndexShow();
        IEnumerable<ViewModelSongs> GetAllSongForDateTime();
        Song GetById(int id);
        Song GetByName(string Name);
    }
}
