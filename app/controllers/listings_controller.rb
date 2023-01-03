class ListingsController < ApplicationController

    def index
        # ex: example.com/listings?identity_id=1&service_id=1&location_id=1

        listings = Listing.where(nil)
        listings = listings.filter_by_identity(params[:identity_id]) if params[:identity_id].present?
        listings = listings.filter_by_service(params[:service_id]) if params[:service_id].present?
        listings = listings.filter_by_location(params[:location_id]) if params[:location_id].present?

        render json: listings
    end

end
