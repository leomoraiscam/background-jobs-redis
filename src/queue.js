import 'dotenv/config';

import Queue from './lib/Queue';
import RegistationMail from './jobs/RegistrationMail';

Queue.process(RegistationMail.handle)