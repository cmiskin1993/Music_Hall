class Concert < ApplicationRecord
    validates :title, presence: true
    has_many :tickets
    has_many :users, through: :tickets
    validates :description, presence: true, uniqueness: {case_sensitive: false}
end
