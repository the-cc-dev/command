import mixin from 'content/lib/mixin'
import ContentEditable from './ContentEditable'
import HTML from './HTML'


class ContentEditableHTML extends ContentEditable { }
mixin(ContentEditableHTML, HTML)

export default ContentEditableHTML
