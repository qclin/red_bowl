class Entry < ActiveRecord::Base
  belongs_to :user
  belongs_to :contest
  has_many :votes 

  validates :photo, presence: true
  validates :tag, presence: true
end
