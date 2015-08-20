# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

############# DB:SEED FIRST 

# User.destroy_all 
# Contest.destroy_all

# admin = User.create({username:'admin', email: 'admin@gameofbowls.com', password: 'yoroshiku'}); 

# 21.times do 
#   User.create({username: Faker::Internet.user_name, email: Faker::Internet.email , password: Faker::Internet.password(8)})
# end 

# 52.times do 
#   Contest.create({category: Faker::Lorem.sentence, deadline: Faker::Date.backward(365)})
# end 

############# DB:SEED SECOND <<<< now that user table is filled 

@Users = User.all()
User_ids = []
@Users.each do |x|
  User_ids << x.id
end

@Contests = Contest.all()
Contest_ids = []
@Contests.each do |x|
  Contest_ids << x.id
end  



Entry.destroy_all
10.times do 
  # one request is 20 post let's make 200 
  get_puppies = HTTParty.get("https://api.instagram.com/v1/tags/dogs/media/recent?client_id="+ENV["INSTAGRAM_API_KEY"])
  get_puppies["data"].each_with_index do |x,i| 
    Entry.create({
      photo: x["images"]["low_resolution"]["url"], 
      tag: x["tags"], 
      user_id: User_ids[i % User_ids.length], 
      contest_id: rand(Contest_ids[-1] - Contest_ids[0]) + Contest_ids[0]
    })
  end 
end 

#############

# Contest.create([{category: 'kawaii desu', deadline: "Jan-15-2015"}, 
#     {category: 'flatiron toast', deadline: "Feb-15-2015"}, 
#     {category: 'nori wrap', deadline: "Mar-15-2015"}, 
#     {category: 'baby it is cold outside', deadline: "Apr-15-2015"}, 
#     {category: 'berlin berg', deadline: "May-15-2015"}, 
#     {category: 'kuntshall ', deadline: "Jun-15-2015"}, 
#     {category: 'words word', deadline: "Jul-15-2015"}, 
#     {category: 'summertime sadness', deadline: "Aug-15-2015"}, 
#     {category: 'tuna melt', deadline: "Sep-15-2015"}
#     ]); 
