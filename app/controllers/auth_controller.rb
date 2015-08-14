$secret = JSON.parse(File.read('../secrets.json'))

class AuthController < ApplicationController 
  skip_before_action :authenticate, only: [:login]

  def login 
    username = params['user']['username']
    password = params['user']['password']

    @user = User.find_by(username: username)

    if @user && @user.authenticate(password)
      render json: {token: makeToken(@user.id)}
    else 
      render json: {'authorized':'false'}, :status => 401
    end 
  end 
end 

