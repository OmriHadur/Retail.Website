import { CartResource } from "src/app/resources/cart/cart.resource";
import { UserResource } from "src/app/resources/user/user.resource";
import { LoginResource } from "src/app/resources/user/login.resource";
import { EventEmitter } from "protractor";
import { CartItemResource } from "src/app/resources/cart/cart.item.resource";
import { Injectable } from '@angular/core';
import { OrderResource } from 'src/app/resources/order/order.resource';

const userResourceKey = "userResource";
const tokenKey = "token";
const cartResourceKey = "cartResource";
const orderKey = "order";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  event: EventEmitter;

  public onCartChanged = "onCartChanged";
  public onCartUpdated = "onCartUpdated";
  public onUserChanged = "onUserChanged";

  constructor() {
    var events = require("events");
    this.event = new events.EventEmitter();
  }

  setOrder(order: OrderResource) {
    localStorage.setItem(orderKey, JSON.stringify(order));
  }

  removeOrder() {
    localStorage.removeItem(orderKey);
  }

  getOrder(): OrderResource {
    return JSON.parse(localStorage.getItem(orderKey));
  }

  getCart(): CartResource {
    return JSON.parse(localStorage.getItem(cartResourceKey));
  }

  getCartAndObserve(onCartUpdated) {
    this.event.on(this.onCartUpdated, (cart) => onCartUpdated(cart));
    onCartUpdated(this.getCart());
  }

  removeCart() {
    localStorage.removeItem(cartResourceKey);
    this.event.emit(this.onCartUpdated, null);
  }

  emitonCartChanged(cartId: string, cartItemResource: CartItemResource) {
    this.event.emit(this.onCartChanged, cartId, cartItemResource);
  }

  setCart(cartResource: CartResource) {
    localStorage.setItem(cartResourceKey, JSON.stringify(cartResource));
    this.event.emit(this.onCartUpdated, cartResource);
  }

  getUser(): UserResource {
    return JSON.parse(localStorage.getItem(userResourceKey));
  }

  getUserAndObserve(onUserChanged) {
    this.event.on(this.onUserChanged, (user) => onUserChanged(user));
    onUserChanged(this.getUser());
  }

  getToken(): string {
    var token = localStorage.getItem(tokenKey);
    return token ? token : "";
  }

  setLogin(loginResource: LoginResource) {

    localStorage.setItem(tokenKey, "Bearer " + loginResource.token);
    delete loginResource.token;
    localStorage.setItem(userResourceKey, JSON.stringify(loginResource.user));
    this.event.emit(this.onUserChanged, loginResource.user);
  }

  logout() {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(userResourceKey);
    localStorage.removeItem(cartResourceKey);
    this.event.emit(this.onUserChanged, null);
    this.event.emit(this.onCartUpdated, null);
  }
}
