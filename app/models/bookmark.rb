class Bookmark < ApplicationRecord
    belongs_to :listing
    belongs_to :user
end
