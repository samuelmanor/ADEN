class ListingSerializer < ActiveModel::Serializer
  attributes :id, :identity_id, :service_id, :location_id, :name, :address, :description, :website, :phone

  has_many :bookmarks
  has_many :comments
end
