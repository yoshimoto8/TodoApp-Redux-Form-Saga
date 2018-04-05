class TodoDatasController < ApplicationController
  def index
    @data = TodoDatum.all()
    render json: @data
  end

  def create
    @create_data = TodoDatum.create(text: params[:todoText])
    render json: @create_data
  end 

  def destroy
    @deleted_data= TodoDatum.find(params[:id]).delete
    render json: @deleted_data
  end
end
