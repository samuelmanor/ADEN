class Comment < ApplicationRecord
    belongs_to :listing
    belongs_to :user

    def author
        user.username
    end
    
end
