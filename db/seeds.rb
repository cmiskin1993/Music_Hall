# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding spices..."

user1 = User.create(name:'Carrie', email:'carrie@gmail.com', password:'Password')

user2 = User.create(name:'Meir', email:'meir@gmail.com', password:'Password')


concert1 = Concert.create(title: 'Music of the Spheres', artist: 'Coldplay', description:'Music of the Spheres (subtitled Vol I. From Earth with Love) is the ninth studio album by British rock band Coldplay', image:'https://upload.wikimedia.org/wikipedia/en/b/bf/Coldplay_-_Music_of_the_Spheres_%28Official_Album_Artwork%29.png', price:150)

concert2 = Concert.create(title: 'Justice World Tour', artist: 'Justin Bieber', description:'The Justice World Tour is the fourth concert tour by Canadian singer Justin Bieber.', image:'https://cache.umusic.com/_sites/_halo/justinbieber/images/v3/jb-tour-header-mobile.jpg', price:200)

concert3 = Concert.create(title: 'Mercury Tour,', artist: 'Imagine Dragons', description:'The Mercury World Tour is the fourth concert tour by American pop rock band Imagine Dragons in support of their fifth and sixth studio albums Mercury', image:'https://images.bubbleup.com/vipnation/1-default/2-vipnationcom/imagine_dragons_summer_2022_1280x720_1648149163.jpg', price:70)


puts "✅ Done seeding!"