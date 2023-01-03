class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :listing_id

  has_one :listing
  has_one :user
end
