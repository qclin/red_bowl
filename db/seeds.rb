# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


admin = User.create(username:'admin', email: 'admin@gameofbowls.com', password: 'yoroshiku'); 

Contest.create([{category: 'kawaii desu', deadline: "Jan-15-2015"}, 
    {category: 'flatiron toast', deadline: "Feb-15-2015"}, 
    {category: 'nori wrap', deadline: "Mar-15-2015"}, 
    {category: 'baby it is cold outside', deadline: "Apr-15-2015"}, 
    {category: 'berlin berg', deadline: "May-15-2015"}, 
    {category: 'kuntshall ', deadline: "Jun-15-2015"}, 
    {category: 'words word', deadline: "Jul-15-2015"}, 
    {category: 'summertime sadness', deadline: "Aug-15-2015"}, 
    {category: 'tuna melt', deadline: "Sep-15-2015"}
    ]); 


Entry.create([

  ])