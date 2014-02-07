var KssAngular;

/**
 * An instance of this class is returned on calling `KssSection.modifier`.
 * Exposes convenience methods for interpreting data.
 *
 * @param {Object} data A part of the data object passed on by `KssSection`.
 */
module.exports = KssAngular = function (data) {
  if (!(this instanceof KssAngular)) {
    return new KssAngular();
  }
  this.data = data || {};
  this.init();
};

KssAngular.prototype.init = function () {

};

KssAngular.prototype.markup = function() {
  if (!(this.data.section && this.data.section.angular)) {
    return false;
  }

  return this.data.section.angular;
};