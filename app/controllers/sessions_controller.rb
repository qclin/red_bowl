class SessionsController < ApplicationController 
  before_action :set_current_user, only: [:show, :edit, :update, :destroy]

  def show 
    render json: @user
  end 

  # GET /users/1/edit
  def edit
    render json: @user
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  private 
  def set_current_user 
    @user = User.find(currentUserId);
  end 

  def user_params 
    params.require(:user).permit(:username, :email, :password)
  end 

end 

