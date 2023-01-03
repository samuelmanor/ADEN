class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :listing_id, :commenttext, :author

  has_one :listing
  has_one :user
end
