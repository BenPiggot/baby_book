# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([{ name: "test", email: "test@test.test", password: "test" }, { name: "test2", email: "test2@test.com", password: "test2" }])

babies = Baby.create([{ name: 'Test', birthday: 'January 1, 2015', gender: 'boy', user: users.first }, { name: 'Test3', birthday: 'January 2, 2015', gender: 'boy', user: users.first }, { name: 'Tes4', birthday: 'January 3, 2015', gender: 'girl', user: users.first }, { name: 'Test2', birthday: 'January 2, 2015', gender: 'girl', user: users.last }])

Event.create([{ date: "May 8, 2015", topic: "Test Topic", body: "Test Topic Body", baby: babies.first }, { date: "May 8, 2015", topic: "Test Topic2", body: "Test Topic Body2", baby: babies.last }])

stats = Stat.create([{ height: "18", weight: "10", date: "May 8, 2015", baby: babies.first }, { height: "20", weight: "9", date: "May 5, 2015", baby: babies.last }])
