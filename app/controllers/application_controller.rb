class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  respond_to :html, :json
    
  protect_from_forgery 

  before_action :configure_permitted_parameters, if: :devise_controller? 
  config.to_prepare do
   DeviseController.respond_to :html, :json
  end


  def angular 
    render 'layouts/application'
  end 

  
  # adding a header for CSRF Protection
  after_action :set_csrf_cookie_for_ng
  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end


  private 
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username
  end 

  # adding a header for CSRF Protection
  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

end
