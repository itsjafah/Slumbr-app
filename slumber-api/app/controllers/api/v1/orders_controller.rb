class Api::V1::OrdersController < ApplicationController

  def index
    @orders = Order.all
    render json: @orders, status: :ok
  end

  def show
    @order = Order.find_by(id: params[:id])
    render json: @order, status: :ok
  end

  def create
    # byebug
    @order = Order.create(order_params)
    render json: @order, status: :created
  end

  def update
    @order = Order.find_by(id: params[:id])
    @order.update(order_params)
    render json: @order, status: 202
  end

  private

  def order_params
    params.require(:order).permit(:bed_id, :host_id, :pillows, :extra_sheets, :start_date, :end_date, :total_price)
  end
end
