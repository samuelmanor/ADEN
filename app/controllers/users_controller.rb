class UsersController < ApplicationController
    # skip_before_action :authorized, only:[:index, :create]

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: 'Not authorized' }, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        render json: user, status: :created
    end

    def update
        user = User.find_by!(id: params[:id])
        user.update(update_user_params)
        render json: user, status: :accepted
    end

    # def destroy
    #     user = User.find_by!(id: params[:id])

    #     user.comments.destroy_all
    #     user.bookmarks.destroy_all
    #     user.destroy

    #     head :no_content
    # end

    private

    def user_params
        params.permit(:username, :password, :email, :bio, :avatar, :comment)
    end

    def update_user_params
        params.permit(:username, :bio)
    end

end
