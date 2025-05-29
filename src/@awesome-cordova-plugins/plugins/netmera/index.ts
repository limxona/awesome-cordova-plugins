/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Netmera
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Netmera } from '@awesome-cordova-plugins/netmera';
 *
 *
 * constructor(private netmera: Netmera) { }
 *
 * ...
 *
 *
 * this.netmera.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'NetmeraPlugin',
  plugin: 'cordova-plugin-netmera',
  pluginRef: 'window.NetmeraPlugin',
  repo: 'https://github.com/limxona/cordova-plugin-netmera',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Netmera extends AwesomeCordovaNativePlugin {
  /**
   * This function does something
   * @param netmeraKey {string} Netmera API Key
   * @param fcmKey {string} FCM KEY for android
   * @param baseUrl {string} BaseURL for on premise setup
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  start(netmeraKey: string, fcmKey: string, baseUrl?: string): void {}

  /**
   * Requests push notification authorization from the user.
   * @return {void}
   */
  @Cordova()
  requestPushNotificationAuthorization(): void {}

  /**
   * Subscribes to push notification events.
   * @return {Promise<NetmeraPush>} Resolves with the received push notification data.
   */
  @Cordova()
  subscribePushNotification(): Promise<NetmeraPush> {
    return;
  }

  /**
   * Subscribes to events triggered when a push notification contains a URL and is opened.
   * @return {Promise<string>} Resolves with the URL string that was opened.
   */
  @Cordova()
  subscribeOpenUrl(): Promise<string> {
    return;
  }

  /**
   * Subscribes to push notification click events.
   * @return {Promise<NetmeraPush>} Resolves with the push notification data when clicked.
   */
  @Cordova()
  subscribePushClick(): Promise<NetmeraPush> {
    return;
  }

  /**
   * Subscribes to button click events inside push notifications.
   * @return {Promise<NetmeraPush>} Resolves with the push notification data when a button is clicked.
   */
  @Cordova()
  subscribePushButtonClick(): Promise<NetmeraPush> {
    return;
  }

  /**
   * Sends a custom event to Netmera for analytics or tracking purposes.
   * @param event {NetmeraEvent} The event object to send.
   * @return {void}
   */
  @Cordova()
  sendEvent(event: NetmeraEvent): void {}

  /**
   * Fetches the inbox messages using a filter.
   * @param filter {NetmeraInboxFilter} Filter used to fetch specific inbox items.
   * @return {Promise<NetmeraInbox>} Resolves with the fetched inbox data.
   */
  @Cordova()
  fetchInboxUsingFilter(filter: NetmeraInboxFilter): Promise<NetmeraInbox> {
    return;
  }

  /**
   * Fetches the next page of inbox messages.
   * @return {Promise<NetmeraInbox>} Resolves with the next page of inbox data.
   */
  @Cordova()
  fetchNextPage(): Promise<NetmeraInbox> {
    return;
  }

  /**
   * Counts the number of inbox items with the given status.
   * @param status {NetmeraPushStatus} The status to count (e.g., read, unread).
   * @return {Promise<number>} Resolves with the count of matching items.
   */
  @Cordova()
  countForStatus(status: NetmeraPushStatus): Promise<number> {
    return;
  }

  /**
   * Updates the status of a range of inbox items.
   * @param index {number} The starting index of the messages to update.
   * @param length {number} The number of messages to update.
   * @param status {NetmeraPushStatus} The new status to apply.
   * @return {Promise<boolean>} Resolves with true if the update was successful.
   */
  @Cordova()
  updatePushStatus(index: number, length: number, status: NetmeraPushStatus): Promise<boolean> {
    return;
  }

  /**
   * Updates the user information for Netmera.
   * @param user {NetmeraUser} The user object to update.
   * @return {void}
   */
  @Cordova()
  updateUser(user: NetmeraUser): void {}
}

export interface NetmeraInboxFilter {
  status?: number;
  pageSize?: number;
  categories?: string[];
  includeExpiredObjects?: boolean;
}
export interface NetmeraPush {
  title: string;
  subtitle: string;
  body: string;
  pushId: string;
  pushInstanceId: string;
  pushType: number;
  inboxStatus: number;
  sendDate: any;
  deeplinkUrl: string;
}
export interface NetmeraInbox {
  hasNextPage: boolean;
  inbox: NetmeraPush[];
}
export enum NetmeraPushStatus {
  undefiend = 0,
  read = 1,
  unread = 2,
  readAndUnread = 3,
  deleted = 4,
  all = 7,
}
export class NetmeraUser {
  private pa?: string;
  private pb?: string;
  private pc?: string[];
  private pd?: number;
  private pe?: number;
  private pf?: number;
  private pg?: number;
  private ph?: string;
  private pi?: string;
  private pj?: string;
  private pk?: string;
  private pl?: string;
  private pm?: string;
  private pn?: string;
  private po?: string;
  userId?: string;
  msisdn?: string;
  email?: string;

  set name(value: string) {
    this.pa = value;
  }

  set surname(value: string) {
    this.pb = value;
  }

  set externalSegments(value: string[]) {
    this.pc = value;
  }

  set gender(value: number) {
    this.pd = value;
  }

  set dateOfBirth(value: number) {
    this.pe = value;
  }

  set maritalStatus(value: number) {
    this.pf = value;
  }

  set childCount(value: number) {
    this.pg = value;
  }

  set country(value: string) {
    this.ph = value;
  }

  set state(value: string) {
    this.pi = value;
  }

  set city(value: string) {
    this.pj = value;
  }

  set district(value: string) {
    this.pk = value;
  }

  set occupation(value: string) {
    this.pl = value;
  }

  set industry(value: string) {
    this.pm = value;
  }

  set favoriteTeam(value: string) {
    this.pn = value;
  }

  set language(value: string) {
    this.po = value;
  }
}

export enum NMUserGender {
  MALE = 0,
  FEMALE = 1,
  NOT_SPECIFIED = 2,
}

export enum NMUserMaritalStatus {
  SINGLE = 0,
  MARRIED = 1,
  NOT_SPECIFIED = 2,
}

export class NetmeraEvent {}
