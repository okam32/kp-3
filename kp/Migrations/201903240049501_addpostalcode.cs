namespace kp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addpostalcode : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "PostalCode", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "PostalCode");
        }
    }
}
