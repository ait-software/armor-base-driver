"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FakeDriver = void 0;
require("source-map-support/register");
var _2 = require("../..");
var _lib = require("../../lib");
var _lodash = _interopRequireDefault(require("lodash"));
var _armorSupport = require("armor-support");
class FakeDriver extends _2.BaseDriver {
  constructor() {
    super();
    this.protocol = _lib.PROTOCOLS.MJSONWP;
    this.sessionId = null;
    this.jwpProxyActive = false;
  }
  sessionExists(sessionId) {
    if (!sessionId) {
      return false;
    }
    return sessionId === this.sessionId;
  }
  driverForSession() {
    return this;
  }
  async createSession(desiredCapabilities, requiredCapabilities, capabilities) {
    this.sessionId = `fakeSession_${_armorSupport.util.uuidV4()}`;
    if (capabilities) {
      return [this.sessionId, capabilities];
    } else {
      this.desiredCapabilities = desiredCapabilities;
      this.requiredCapabilities = requiredCapabilities || {};
      return [this.sessionId, _lodash.default.extend({}, desiredCapabilities, requiredCapabilities)];
    }
  }
  async executeCommand(cmd, ...args) {
    if (!this[cmd]) {
      throw new _2.errors.NotYetImplementedError();
    }
    if (cmd === 'createSession') {
      this.protocol = (0, _2.determineProtocol)(...args);
    }
    return await this[cmd](...args);
  }
  async deleteSession() {
    this.jwpProxyActive = false;
    this.sessionId = null;
  }
  async getStatus() {
    return "I'm fine";
  }
  async setUrl(url) {
    return `Navigated to: ${url}`;
  }
  async getUrl() {
    return 'http://foobar.com';
  }
  async back(sessionId) {
    return sessionId;
  }
  async forward() {}
  async refresh() {
    throw new Error('Too Fresh!');
  }
  async getSession() {
    throw new _2.errors.NoSuchDriverError();
  }
  async click(elementId, sessionId) {
    return [elementId, sessionId];
  }
  async implicitWait(ms) {
    return ms;
  }
  async clickCurrent(button) {
    return button;
  }
  async setNetworkConnection(type) {
    return type;
  }
  async moveTo(element, xOffset, yOffset) {
    return [element, xOffset, yOffset];
  }
  async getText() {
    return '';
  }
  async getAttribute(attr, elementId, sessionId) {
    return [attr, elementId, sessionId];
  }
  async setValue(value, elementId) {
    return [value, elementId];
  }
  async performTouch(...args) {
    return args;
  }
  async setFrame(frameId) {
    return frameId;
  }
  async removeApp(app) {
    return app;
  }
  async receiveAsyncResponse() {
    return {
      status: 13,
      value: 'Mishandled Driver Error'
    };
  }
  proxyActive() {
    return false;
  }
  getProxyAvoidList() {
    return [];
  }
  canProxy() {
    return false;
  }
}
exports.FakeDriver = FakeDriver;require('source-map-support').install();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC9wcm90b2NvbC9mYWtlLWRyaXZlci5qcyIsIm5hbWVzIjpbIl8yIiwicmVxdWlyZSIsIl9saWIiLCJfbG9kYXNoIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9hcm1vclN1cHBvcnQiLCJGYWtlRHJpdmVyIiwiQmFzZURyaXZlciIsImNvbnN0cnVjdG9yIiwicHJvdG9jb2wiLCJQUk9UT0NPTFMiLCJNSlNPTldQIiwic2Vzc2lvbklkIiwiandwUHJveHlBY3RpdmUiLCJzZXNzaW9uRXhpc3RzIiwiZHJpdmVyRm9yU2Vzc2lvbiIsImNyZWF0ZVNlc3Npb24iLCJkZXNpcmVkQ2FwYWJpbGl0aWVzIiwicmVxdWlyZWRDYXBhYmlsaXRpZXMiLCJjYXBhYmlsaXRpZXMiLCJ1dGlsIiwidXVpZFY0IiwiXyIsImV4dGVuZCIsImV4ZWN1dGVDb21tYW5kIiwiY21kIiwiYXJncyIsImVycm9ycyIsIk5vdFlldEltcGxlbWVudGVkRXJyb3IiLCJkZXRlcm1pbmVQcm90b2NvbCIsImRlbGV0ZVNlc3Npb24iLCJnZXRTdGF0dXMiLCJzZXRVcmwiLCJ1cmwiLCJnZXRVcmwiLCJiYWNrIiwiZm9yd2FyZCIsInJlZnJlc2giLCJFcnJvciIsImdldFNlc3Npb24iLCJOb1N1Y2hEcml2ZXJFcnJvciIsImNsaWNrIiwiZWxlbWVudElkIiwiaW1wbGljaXRXYWl0IiwibXMiLCJjbGlja0N1cnJlbnQiLCJidXR0b24iLCJzZXROZXR3b3JrQ29ubmVjdGlvbiIsInR5cGUiLCJtb3ZlVG8iLCJlbGVtZW50IiwieE9mZnNldCIsInlPZmZzZXQiLCJnZXRUZXh0IiwiZ2V0QXR0cmlidXRlIiwiYXR0ciIsInNldFZhbHVlIiwidmFsdWUiLCJwZXJmb3JtVG91Y2giLCJzZXRGcmFtZSIsImZyYW1lSWQiLCJyZW1vdmVBcHAiLCJhcHAiLCJyZWNlaXZlQXN5bmNSZXNwb25zZSIsInN0YXR1cyIsInByb3h5QWN0aXZlIiwiZ2V0UHJveHlBdm9pZExpc3QiLCJjYW5Qcm94eSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6Ii4uLy4uLy4uIiwic291cmNlcyI6WyJ0ZXN0L3Byb3RvY29sL2Zha2UtZHJpdmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtYXdhaXQgKi9cbmltcG9ydCB7IGVycm9ycywgQmFzZURyaXZlciwgZGV0ZXJtaW5lUHJvdG9jb2wgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBQUk9UT0NPTFMgfSBmcm9tICcuLi8uLi9saWInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHV0aWwgfSBmcm9tICdhcm1vci1zdXBwb3J0JztcblxuXG5jbGFzcyBGYWtlRHJpdmVyIGV4dGVuZHMgQmFzZURyaXZlciB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wcm90b2NvbCA9IFBST1RPQ09MUy5NSlNPTldQO1xuICAgIHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcbiAgICB0aGlzLmp3cFByb3h5QWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBzZXNzaW9uRXhpc3RzIChzZXNzaW9uSWQpIHtcbiAgICBpZiAoIXNlc3Npb25JZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gc2Vzc2lvbklkID09PSB0aGlzLnNlc3Npb25JZDtcbiAgfVxuXG4gIGRyaXZlckZvclNlc3Npb24gKC8qc2Vzc2lvbklkKi8pIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVNlc3Npb24gKGRlc2lyZWRDYXBhYmlsaXRpZXMsIHJlcXVpcmVkQ2FwYWJpbGl0aWVzLCBjYXBhYmlsaXRpZXMpIHtcbiAgICAvLyBVc2UgYSBjb3VudGVyIHRvIG1ha2Ugc3VyZSBlYWNoIHNlc3Npb24gaGFzIGEgdW5pcXVlIGlkXG4gICAgdGhpcy5zZXNzaW9uSWQgPSBgZmFrZVNlc3Npb25fJHt1dGlsLnV1aWRWNCgpfWA7XG4gICAgaWYgKGNhcGFiaWxpdGllcykge1xuICAgICAgcmV0dXJuIFt0aGlzLnNlc3Npb25JZCwgY2FwYWJpbGl0aWVzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXNpcmVkQ2FwYWJpbGl0aWVzID0gZGVzaXJlZENhcGFiaWxpdGllcztcbiAgICAgIHRoaXMucmVxdWlyZWRDYXBhYmlsaXRpZXMgPSByZXF1aXJlZENhcGFiaWxpdGllcyB8fCB7fTtcbiAgICAgIHJldHVybiBbdGhpcy5zZXNzaW9uSWQsIF8uZXh0ZW5kKHt9LCBkZXNpcmVkQ2FwYWJpbGl0aWVzLCByZXF1aXJlZENhcGFiaWxpdGllcyldO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGV4ZWN1dGVDb21tYW5kIChjbWQsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXNbY21kXSkge1xuICAgICAgdGhyb3cgbmV3IGVycm9ycy5Ob3RZZXRJbXBsZW1lbnRlZEVycm9yKCk7XG4gICAgfVxuICAgIGlmIChjbWQgPT09ICdjcmVhdGVTZXNzaW9uJykge1xuICAgICAgdGhpcy5wcm90b2NvbCA9IGRldGVybWluZVByb3RvY29sKC4uLmFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgdGhpc1tjbWRdKC4uLmFyZ3MpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlU2Vzc2lvbiAoKSB7XG4gICAgdGhpcy5qd3BQcm94eUFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIGdldFN0YXR1cyAoKSB7XG4gICAgcmV0dXJuIFwiSSdtIGZpbmVcIjtcbiAgfVxuXG4gIGFzeW5jIHNldFVybCAodXJsKSB7XG4gICAgcmV0dXJuIGBOYXZpZ2F0ZWQgdG86ICR7dXJsfWA7XG4gIH1cblxuICBhc3luYyBnZXRVcmwgKCkge1xuICAgIHJldHVybiAnaHR0cDovL2Zvb2Jhci5jb20nO1xuICB9XG5cbiAgYXN5bmMgYmFjayAoc2Vzc2lvbklkKSB7XG4gICAgcmV0dXJuIHNlc3Npb25JZDtcbiAgfVxuXG4gIGFzeW5jIGZvcndhcmQgKCkge31cblxuICBhc3luYyByZWZyZXNoICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvbyBGcmVzaCEnKTtcbiAgfVxuXG4gIGFzeW5jIGdldFNlc3Npb24gKCkge1xuICAgIHRocm93IG5ldyBlcnJvcnMuTm9TdWNoRHJpdmVyRXJyb3IoKTtcbiAgfVxuXG4gIGFzeW5jIGNsaWNrIChlbGVtZW50SWQsIHNlc3Npb25JZCkge1xuICAgIHJldHVybiBbZWxlbWVudElkLCBzZXNzaW9uSWRdO1xuICB9XG5cbiAgYXN5bmMgaW1wbGljaXRXYWl0IChtcykge1xuICAgIHJldHVybiBtcztcbiAgfVxuXG4gIGFzeW5jIGNsaWNrQ3VycmVudCAoYnV0dG9uKSB7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIGFzeW5jIHNldE5ldHdvcmtDb25uZWN0aW9uICh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBhc3luYyBtb3ZlVG8gKGVsZW1lbnQsIHhPZmZzZXQsIHlPZmZzZXQpIHtcbiAgICByZXR1cm4gW2VsZW1lbnQsIHhPZmZzZXQsIHlPZmZzZXRdO1xuICB9XG5cbiAgYXN5bmMgZ2V0VGV4dCAoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgYXN5bmMgZ2V0QXR0cmlidXRlIChhdHRyLCBlbGVtZW50SWQsIHNlc3Npb25JZCkge1xuICAgIHJldHVybiBbYXR0ciwgZWxlbWVudElkLCBzZXNzaW9uSWRdO1xuICB9XG5cbiAgYXN5bmMgc2V0VmFsdWUgKHZhbHVlLCBlbGVtZW50SWQpIHtcbiAgICByZXR1cm4gW3ZhbHVlLCBlbGVtZW50SWRdO1xuICB9XG5cbiAgYXN5bmMgcGVyZm9ybVRvdWNoICguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGFyZ3M7XG4gIH1cblxuICBhc3luYyBzZXRGcmFtZSAoZnJhbWVJZCkge1xuICAgIHJldHVybiBmcmFtZUlkO1xuICB9XG5cbiAgYXN5bmMgcmVtb3ZlQXBwIChhcHApIHtcbiAgICByZXR1cm4gYXBwO1xuICB9XG5cbiAgYXN5bmMgcmVjZWl2ZUFzeW5jUmVzcG9uc2UgKCkge1xuICAgIC8vIHRoaXMgaXMgaGVyZSB0byB0ZXN0IGEgZmFpbGluZyBjb21tYW5kIHRoYXQgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3JcbiAgICByZXR1cm4ge3N0YXR1czogMTMsIHZhbHVlOiAnTWlzaGFuZGxlZCBEcml2ZXIgRXJyb3InfTtcbiAgfVxuXG4gIHByb3h5QWN0aXZlICgvKnNlc3Npb25JZCovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0UHJveHlBdm9pZExpc3QgKC8qc2Vzc2lvbklkKi8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjYW5Qcm94eSAoLypzZXNzaW9uSWQqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgeyBGYWtlRHJpdmVyIH07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0EsSUFBQUEsRUFBQSxHQUFBQyxPQUFBO0FBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsT0FBQSxHQUFBQyxzQkFBQSxDQUFBSCxPQUFBO0FBQ0EsSUFBQUksYUFBQSxHQUFBSixPQUFBO0FBR0EsTUFBTUssVUFBVSxTQUFTQyxhQUFVLENBQUM7RUFFbENDLFdBQVdBLENBQUEsRUFBSTtJQUNiLEtBQUssQ0FBQyxDQUFDO0lBQ1AsSUFBSSxDQUFDQyxRQUFRLEdBQUdDLGNBQVMsQ0FBQ0MsT0FBTztJQUNqQyxJQUFJLENBQUNDLFNBQVMsR0FBRyxJQUFJO0lBQ3JCLElBQUksQ0FBQ0MsY0FBYyxHQUFHLEtBQUs7RUFDN0I7RUFFQUMsYUFBYUEsQ0FBRUYsU0FBUyxFQUFFO0lBQ3hCLElBQUksQ0FBQ0EsU0FBUyxFQUFFO01BQ2QsT0FBTyxLQUFLO0lBQ2Q7SUFDQSxPQUFPQSxTQUFTLEtBQUssSUFBSSxDQUFDQSxTQUFTO0VBQ3JDO0VBRUFHLGdCQUFnQkEsQ0FBQSxFQUFpQjtJQUMvQixPQUFPLElBQUk7RUFDYjtFQUVBLE1BQU1DLGFBQWFBLENBQUVDLG1CQUFt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