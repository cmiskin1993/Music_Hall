class User < ApplicationRecord
    has_many :tickets
    has_many :concerts, through: :tickets

    validates :email, uniqueness: true, presence: true
    validates :password, length: { minimum: 4 }



    has_secure_password
end