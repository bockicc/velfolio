export interface Database {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          message: string;
          created_at: string;
          status: 'new' | 'read' | 'archived';
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          message: string;
          created_at?: string;
          status?: 'new' | 'read' | 'archived';
        };
      };
    };
    Functions: {
      submit_contact_message: {
        Args: {
          p_name: string;
          p_email: string;
          p_message: string;
        };
        Returns: void;
      };
    };
  };
}
