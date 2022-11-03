class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :description, :image
end
