class EntriesController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update]
  # GET /entries
  # GET /entries.json
  def index
    @entries = Entry.all
    render json: @entries
  end

  def show_user_entries
    @user_entries = Entry.where(params[:user_id])
  end

  def show_contest_entries
    @user_entries = Entry.where(params[:contest_id])
  end
  
  # GET /entries/1
  # GET /entries/1.json
  def show
    @entry = Entry.find(params[:id])
    render json: @entry
  end

  # GET /entries/new
  def new
    @entry = Entry.new
  end

  # GET /entries/1/edit
  def edit
    @entry = Entry.find(params[:id])
    render json: @entry
  end

  # POST /entries
  # POST /entries.json
  def create
    @entry = Entry.new(entry_params.merge(user_id: current_user.id))
    @entry.photo = params[:file]
    
    respond_to do |format|
      if @entry.save
        format.html { redirect_to @entry, notice: 'Entry was successfully created.' }
        format.json { render :show, status: :created, location: @entry }
      else
        format.html { render :new }
        format.json { render json: @entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /entries/1
  # PATCH/PUT /entries/1.json
  def update
    @entry = Entry.find(params[:id])

    respond_to do |format|
      if @entry.update(entry_params)
        format.html { redirect_to @entry, notice: 'Entry was successfully updated.' }
        format.json { render :show, status: :ok, location: @entry }
      else
        format.html { render :edit }
        format.json { render json: @entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /entries/1
  # DELETE /entries/1.json
  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy
    respond_to do |format|
      format.html { redirect_to entries_url, notice: 'Entry was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def entry_params
      params.require(:entry).permit(:photo, :tag, :user_id, :contest_id)
    end
end
