class UserSerializer < ActiveModel::Serializer
    attributes :name, :id
    has_many :tickets
    has_many :concerts
  end