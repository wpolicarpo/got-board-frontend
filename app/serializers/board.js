import { ActiveModelSerializer } from 'active-model-adapter';
import DS from 'ember-data';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  attrs: {
    territories: { embedded: 'always' },
  }
});
