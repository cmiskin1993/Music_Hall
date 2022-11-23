class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :description, :image, :price, :user_id
end
