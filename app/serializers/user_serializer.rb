class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :bio, :avatar

  has_many :bookmarks
  has_many :comments
end
