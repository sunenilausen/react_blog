module Api  
  module V1
    class CategoriesController < ApplicationController
      before_action :set_category, only: [:update, :destroy]

      # GET /categories/1
      def show
        @category = Category.find_by(name: params[:id])
        if @category.present?
          render json: @category.articles
        else
          render json: []
        end
      end

      # POST /categories
      def create
        @category = Category.new(category_params)

        if @category.save
          render json: @category, status: :created, location: @category
        else
          render json: @category.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /categories/1
      def update
        if @category.update(category_params)
          render json: @category
        else
          render json: @category.errors, status: :unprocessable_entity
        end
      end

      # DELETE /categories/1
      def destroy
        @category.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_category
          @category = Category.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def category_params
          params.require(:category).permit(:name)
        end
    end
  end
end