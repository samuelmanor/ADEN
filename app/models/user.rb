class User < ApplicationRecord
    has_many :bookmarks
    has_many :comments
end
