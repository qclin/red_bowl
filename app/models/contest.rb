class Contest < ActiveRecord::Base
  has_many :entries
  validates :category, presence: true
  validates :deadline, presence: true
end
