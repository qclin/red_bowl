class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
    
  # protect_from_forgery with: :exception

  #uncomment before_action when you start authenticating
  # before_action :authenticate 

  def setCurrentUserId(id)
    @currentUserId = id
  end 

  def currentUserId 
    @currentUserId
  end 

  def makeToken(user_id)
    payload = {:user_id => user_id}
    #use JWT to encryp user_id and store in token 
    JWT.encode payload, $secrets['jwt']['secret'], 'HS512'
  end 


  private 
    def authenticate 
      auth_header = request.headers['HTTP_AUTHORIZATION']
      if auth_header && auth_header[0..6] == "Bearer "
        token = auth_header[7..-1]
        decoded = JWT.decode token, $secrets['jwt']['secret']
        setCurrentUserId decoded[0]['user_id'];
      else 
        render json: {'authorized':'false'}, :status => 401
      end 


end
