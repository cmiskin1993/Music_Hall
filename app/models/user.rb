class User < ApplicationRecord
    has_many :tickets
    has_many :concerts, through: :tickets

    validates :name, presence: true, length: { minimum: 3 }
    validates :email, uniqueness: true, presence: true
    validates :password, presence: true,length: { minimum: 4 }



    has_secure_password
end