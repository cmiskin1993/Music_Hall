class UserSerializer < ActiveModel::Serializer
  attributes :id, :tickets, :name

  has_many :tickets
  has_many :concerts

end
