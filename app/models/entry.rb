class Entry < ActiveRecord::Base
  belongs_to :user
  belongs_to :contest
  has_many :votes 

  mount_uploader :photo, PhotoUploader
  validates :photo, presence: true
  validates :tag, presence: true
end
