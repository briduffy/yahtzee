20.times do 
  user = User.create(
    email: Faker::Internet.unique.email,
    password: 'password'
  )

  5.times do
    Score.create( 
      user_id: user.id, 
      value: Faker::Number.between(25, 65)
    )
  end
end
