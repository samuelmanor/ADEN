class Listing < ActiveRecord::Base
    has_many :bookmarks, dependent: :destroy
    has_many :comments, dependent: :destroy

    scope :filter_by_identity, -> (identity_id) { where identity_id: [identity_id, 3] }
    scope :filter_by_service, -> (service_id) { where service_id: service_id }
    scope :filter_by_location, -> (location_id) { where location_id: location_id }
end
